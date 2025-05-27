"use client"

import { useReducer, useRef, useCallback, useEffect } from "react"

const TIMER_ACTIONS = {
  START: "START",
  PAUSE: "PAUSE",
  RESET: "RESET",
  TICK: "TICK",
  SET_DURATION: "SET_DURATION",
}

function timerReducer(state, action) {
  switch (action.type) {
    case TIMER_ACTIONS.START:
      return { ...state, isRunning: true }
    case TIMER_ACTIONS.PAUSE:
      return { ...state, isRunning: false }
    case TIMER_ACTIONS.RESET:
      return { ...state, timeLeft: state.duration, isRunning: false }
    case TIMER_ACTIONS.TICK:
      return {
        ...state,
        timeLeft: Math.max(0, state.timeLeft - 1),
        isRunning: state.timeLeft > 1 ? state.isRunning : false,
      }
    case TIMER_ACTIONS.SET_DURATION:
      return {
        ...state,
        duration: action.payload,
        timeLeft: action.payload,
        isRunning: false,
      }
    default:
      return state
  }
}

export function usePomodoroTimer(initialDuration = 1500) {
  // 25 minutes default
  // useReducer: Handle timer logic
  const [state, dispatch] = useReducer(timerReducer, {
    duration: initialDuration,
    timeLeft: initialDuration,
    isRunning: false,
  })

  // useRef: Track timer interval ID
  const intervalRef = useRef(null)

  // useCallback: Control timer functions
  const startTimer = useCallback(() => {
    dispatch({ type: TIMER_ACTIONS.START })
  }, [])

  const pauseTimer = useCallback(() => {
    dispatch({ type: TIMER_ACTIONS.PAUSE })
  }, [])

  const resetTimer = useCallback(() => {
    dispatch({ type: TIMER_ACTIONS.RESET })
  }, [])

  const setDuration = useCallback((duration) => {
    dispatch({ type: TIMER_ACTIONS.SET_DURATION, payload: duration })
  }, [])

  // useEffect: Manage interval for timer ticking
  useEffect(() => {
    if (state.isRunning) {
      intervalRef.current = setInterval(() => {
        dispatch({ type: TIMER_ACTIONS.TICK })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [state.isRunning])

  return {
    ...state,
    startTimer,
    pauseTimer,
    resetTimer,
    setDuration,
  }
}

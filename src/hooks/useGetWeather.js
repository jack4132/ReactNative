/*
 * File: useGetWeather.js
 * Project: weatherapp
 * File Created: Wednesday, 23rd August 2023 3:55:54 pm
 * Author: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Last Modified: Wednesday, 23rd August 2023 4:40:46 pm
 * Modified By: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Copyright 2020 - 2023 Mutual Mobile, Mutual Mobile
 */
import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'
export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(null)
  const [weather, setWeather] = useState()
  const [lat, setLat] = useState()
  const [lon, setLon] = useState()
  const fetchWeatherData = async () => {
    try {
      //   console.log(lat, lon, WEATHER_API_KEY)
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      )
      const data = await res.json()
      setWeather(data)
    } catch (error) {
      setError('could not fetch')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      //   console.log(weather, 'i', status)
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      //   setLocation(location)
      //   console.log(location)
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat, lon])
  return [loading, error, weather]
}

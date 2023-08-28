/*
 * File: UpcomingWeather.js
 * Project: weatherapp
 * File Created: Monday, 10th July 2023 5:35:17 pm
 * Author: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Last Modified: Wednesday, 23rd August 2023 4:27:56 pm
 * Modified By: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Copyright 2020 - 2023 Mutual Mobile, Mutual Mobile
 */
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({ weatherData }) => {
  const DATA = [
    {
      dt_txt: '2022-08-30 16:00:00',
      main: {
        temp_min: 6.34,
        temp_max: 8.24
      },
      weather: [
        {
          main: 'Rain'
        }
      ]
    },
    {
      dt_txt: '2022-04-30 16:00:00',
      main: {
        temp_min: 6.34,
        temp_max: 2.24
      },
      weather: [
        {
          main: 'Clear'
        }
      ]
    },
    {
      dt_txt: '2022-07-30 16:00:00',
      main: {
        temp_min: 8.35,
        temp_max: 7.25
      },
      weather: [
        {
          main: 'Cloudy'
        }
      ]
    }
  ]
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-weather.jpg')}
        style={image}>
        <Text>Upcoming Weather</Text>

        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
          // ItemSeparatorComponent={() => (
          //   <View style={{ backgroundColor: 'red', height: 2 }} />
          // )}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather

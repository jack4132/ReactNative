/*
 * File: ListItem.js
 * Project: weatherapp
 * File Created: Wednesday, 23rd August 2023 9:15:11 am
 * Author: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Last Modified: Wednesday, 23rd August 2023 4:39:29 pm
 * Modified By: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Copyright 2020 - 2023 Mutual Mobile, Mutual Mobile
 */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import moment from 'moment'
const ListItem = props => {
  const { dt_txt, min, max, condition } = props
  const { item, date, temp, dateTextWrapper } = styles
  console.log(condition)
  return (
    <View style={item}>
      <Feather name={weatherType[condition].icon} size={50} color="white" />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/ ${Math.round(max)}°`}</Text>
      {/* <Text style={temp}>{max}</Text> */}
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'pink',
    borderWidth: 5
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  dateTextWrapper: {
    flexDirection: 'column'
  }
})
export default ListItem

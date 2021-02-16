import React from 'react'
import {View,Text,Image} from 'react-native'
import {Styles} from '../styles/global'
import {connect} from 'react-redux'

type Props={
    weather:any
}

const Weather=({weather}:Props)=>{

    return(
        <View>
            <View>
                <View>
                    <Text>
                        <Text>temperature :</Text>
                        <Text>{weather.temperature}</Text>
                    </Text>
                </View>
                <View>
                    <Text>
                        <Text>Weather Icons:</Text>
                       {weather.weather_icons.map((icon:any)=><Image  key={icon} source={{uri:icon}}/>)}
                    </Text>
                </View>
                <View>
                    <Text>
                        <Text>Wind Speed</Text>
                        <Text>{weather.wind_speed}</Text>
                    </Text>
                </View>
                <View>
                    <Text>
                        <Text>Precip</Text>
                        <Text>{weather.precip}</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps=(state:any)=>{
    {weather:state.reducer.weather.data.current}
}

export default connect(mapStateToProps)(Weather);
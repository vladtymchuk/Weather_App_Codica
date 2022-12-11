import React, {FC} from 'react';

import { IHourlyInfo, IWeatherForHour } from '../../models/IHourlyInfo';
import { HourlyInfoItem } from './HourlyInfoItem';

interface HourlyListProps {
    cityHourlyRes: IHourlyInfo
}

export const HourlyList: FC<HourlyListProps> = ({cityHourlyRes}) => {
    return (
        <>
            {
                cityHourlyRes && cityHourlyRes.hourly.slice(0,12).map((item: IWeatherForHour) => {
                    return (
                        <HourlyInfoItem key={item.dt} item={item}/>
                    )
                })
            }
        </>
    )
}
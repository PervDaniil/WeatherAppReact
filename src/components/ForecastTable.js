import { Table, TableCell, TableBody, TableRow, Stack, SvgIcon, Typography } from "@mui/material"
import WeatherStateIcon from '../utils/weatherIcons';
import { IoThermometer, IoTime } from 'react-icons/io5';
import { WiHumidity } from 'react-icons/wi';
import { LuWind } from 'react-icons/lu';


export default function ForecastTable({ data }) {
    return (
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>Temperature</TableCell>
                    <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                            <Typography variant="body2" component="div" mr={1.5}>
                                {data && Math.round(data[0].main.temp)}C&deg;
                            </Typography>
                            <SvgIcon>
                                <IoThermometer />
                            </SvgIcon>
                        </Stack>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Humidity</TableCell>
                    <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                            <Typography variant="body2" component="div" mr={1.5}>
                                {data && data[0].main.humidity}%
                            </Typography>
                            <SvgIcon>
                                <WiHumidity />
                            </SvgIcon>
                        </Stack>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>State</TableCell>
                    <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                            <Typography variant="body2" component="div" mr={1.5}>
                                {data && data[0].weather[0].main}
                            </Typography>
                            <SvgIcon>
                                <WeatherStateIcon weatherState={data && data[0].weather[0].main} />
                            </SvgIcon>
                        </Stack>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Time</TableCell>
                    <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                            <Typography variant="body2" component="div" mr={1.5}>
                                {data && data[0].dt_txt.slice(11, 16)}PM
                            </Typography>
                            <SvgIcon>
                                <IoTime />
                            </SvgIcon>
                        </Stack>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Wind</TableCell>
                    <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                            <Typography variant="body2" component="div" mr={1.5}>
                                {data && data[0].wind.speed}km/h
                            </Typography>
                            <SvgIcon>
                                <LuWind />
                            </SvgIcon>
                        </Stack>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
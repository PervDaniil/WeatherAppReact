import { Table, TableCell, TableBody, TableRow, Stack } from "@mui/material"
import { Thermostat as ThermostatIcon } from '@mui/icons-material';

export default function ForecastTable({ data }) {
    return (
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>Temperature</TableCell>
                    <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                            {data && data[0].main.temp}&deg;
                           <ThermostatIcon />
                        </Stack>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Humidity</TableCell>
                    <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                             {data && data[0].main.humidity}%
                           <ThermostatIcon />
                        </Stack>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>State</TableCell>
                    <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                                {data && data[0].weather[0].main}
                           <ThermostatIcon />
                        </Stack>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Time</TableCell>
                    <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                            {data && data[0].dt_txt.slice(11, 16)}PM
                           <ThermostatIcon />
                        </Stack>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Wind</TableCell>
                    <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                                {data && data[0].wind.speed}km/h
                           <ThermostatIcon />
                        </Stack>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
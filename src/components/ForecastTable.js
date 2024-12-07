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
                            25&deg;
                           <ThermostatIcon />
                        </Stack>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Humidity</TableCell>
                    <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                                12.4%
                           <ThermostatIcon />
                        </Stack>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>State</TableCell>
                    <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                            Cloudy
                           <ThermostatIcon />
                        </Stack>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Time</TableCell>
                    <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                            9:00PM
                           <ThermostatIcon />
                        </Stack>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Wind</TableCell>
                    <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                            5.2km/h
                           <ThermostatIcon />
                        </Stack>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
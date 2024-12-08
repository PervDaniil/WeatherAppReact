import { useState } from "react";
import { AltRoute, Search as SearchIcon } from "@mui/icons-material";
import { Autocomplete, TextField, InputAdornment, Tooltip, IconButton } from "@mui/material";


export default function SearchBar({ setCityState }) {
    const autocompleteOptions = require('../utils/cities.json');
    const [city, setInputCity] = useState('');


    const HandleInputChange = (e) => {
        const { value } = e.target;
        setInputCity(value);
    }

    const HandleCityInput = () => {
        setCityState(city);
        setInputCity('');
    }

    return (
        <Autocomplete
            freeSolo
            value={city}
            options={autocompleteOptions.cities}
            filterOptions={((options, state) => {
                return options.filter(option =>
                    option.toLowerCase().includes(state.inputValue.toLowerCase())).slice(0, 7)
            })}
            renderInput={(parameters => (
                <TextField {...parameters}
                    onChange={HandleInputChange}
                    fullWidth focused placeholder="City searching"
                    InputProps={{
                        ...parameters.InputProps, startAdornment:
                            <InputAdornment position="start">
                                <Tooltip title="Search">
                                    <IconButton onClick={HandleCityInput}>
                                        <SearchIcon />
                                    </IconButton>
                                </Tooltip>
                            </InputAdornment>
                    }}
                    onKeyDown={(keyPressed) => {
                        if (keyPressed.code === 'Enter') {
                            HandleCityInput();
                        }
                    }}
                    sx={{
                        px: 2, pt: 2.5,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '42px', px: 2,
                        },
                    }} />
            ))}
        />
    )
}
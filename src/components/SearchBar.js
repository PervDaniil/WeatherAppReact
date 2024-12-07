import { Search as SearchIcon } from "@mui/icons-material";
import { Autocomplete, TextField, InputAdornment, Tooltip } from "@mui/material";


export default function SearchBar() {
    return (
        <Autocomplete
            freeSolo
            options={['Ivanovka', 'Kant']}
            renderInput={(parameters => (
                <TextField {...parameters}
                    fullWidth focused placeholder="City searching"
                    InputProps={{
                        ...parameters.InputProps, startAdornment:
                            <InputAdornment position="start">
                                <Tooltip title="Search">
                                    <SearchIcon />
                                </Tooltip>
                            </InputAdornment>
                    }}
                    sx={{
                        px: 2, pt: 2.5, '& .MuiOutlinedInput-root': { borderRadius: '42px', px: 2}
                    }} />
            ))}
        />
    )
}
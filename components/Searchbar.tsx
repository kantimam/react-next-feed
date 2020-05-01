import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

interface CountryType {
  name: string;
}

/* function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
} */

type SearchbarProps = {
  getOptions: () => Promise<Response>,
}

export default function Searchbar({ getOptions }: SearchbarProps) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<CountryType[]>([]);
  const [loading, setLoading]=React.useState(false);


  const onInputChange = async (_event: object, _value: string, reason: string) => {
    if (reason === "input") {
      setLoading(true)
      const response = await getOptions();
      /* await sleep(1e3); // For demo purposes. */
      const countries = await response.json();
      setOptions(Object.keys(countries).map((key) => countries[key].item[0]) as CountryType[]);
      setLoading(false)
    }
  }

  /* React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]); */

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: "40rem", margin: "0 auto" }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      onInputChange={onInputChange}

      renderInput={(params) => (
        <TextField
          {...params}
          label="Asynchronous"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
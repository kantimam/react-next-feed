import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

interface ResponseDataType {
  name: string;
}


type SearchbarProps = {
  getOptions: (value: string) => Promise<Response>,
}

export default function Searchbar({ getOptions }: SearchbarProps) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<ResponseDataType[]>([]);
  const [loading, setLoading] = React.useState(false);


  const onInputChange = async (_event: object, value: string, reason: string) => {
    if (reason === "input" && value) {
      setLoading(true)
      const response = await getOptions(value);
      const data = await response.json();
      if (!data || !data.length || !data[0].name) return;
      setOptions(data as ResponseDataType[]);
      setLoading(false)
    }
  }



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
          label="Recipes"
          placeholder="Search for names, ingredients or types"
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
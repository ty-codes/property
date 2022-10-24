import './Home.css';

// const Home = () => {
//     return (
//         <div id="home">
//             <div className="wrapper" >
//             <div className="mini_container">
//                 <h1 className="heading capitalize"> We are<br /> the competition</h1>
//                 <p className="subtitle capitalize">bridging the real estate capital barrier</p>
//                 <button className='btn filled_btn'><a href='/register'>Get started</a></button>
//                 <button className='btn outlined_btn'><a href='/signin'>Log In</a></button>
//                 <p className='policy'>By selecting one or the other, you are agreeing to the</p>
//                 <p className='policy_link capitalize'>
//                     <a href='#'>terms of services </a>
//                     <span>&</span>
//                     <a href='#'> privacy policy</a>
//                 </p>
//             </div>
//         </div>
//         </div>
        
//     )
// }
export default function Home(): JSX.Element {
    const [{ input, ...state }, setState] = useState();
    const handleChange = useHandleChange(setState);
    const handleSubmit = useHandleSubmit(input, setState);
  
    usePageEffect({ title: "Account Settings" });
  
    return (
      <Container sx={{ my: 4 }} maxWidth="sm">
        <Typography sx={{ mb: 4 }} variant="h2" children="Account Settings" />
  
        {state.error && (
          <Alert sx={{ mb: 3 }} severity={"error"} children={state.error} />
        )}
  
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            name="displayName"
            label="Display Name"
            value={input.displayName}
            helperText={" "}
            onChange={handleChange}
            disabled={state.loading}
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
          />
  
          <TextField
            name="email"
            type="email"
            label="Email"
            value={input.email}
            helperText={" "}
            onChange={handleChange}
            disabled={state.loading}
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
          />
  
          <Button
            variant="contained"
            type="submit"
            children="Update Profile"
            disabled={state.loading}
          />
        </Box>
      </Container>
    );
  }
// export default Home;
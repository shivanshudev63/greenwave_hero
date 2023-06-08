import { Paper, Button } from '@mui/material'

function Item({item})
{
    const paperStyle = {
        background: 'transparent',
        borderRadius: '2rem', // Adjust the value as per your preference
    };
    return (
        <Paper style={paperStyle}>
            <img src={item.image} alt={item.title} style={{width:"100%", height:"45vh"}} />
            <div className='description' style={{display:"flex", justifyContent:"center"}}>
                <h2>{item.title}</h2>
            </div>
        </Paper>
    )
}

export default Item;
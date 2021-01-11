import { Button } from "@material-ui/core";

export const Time = () => {
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return (<>
    <Button variant='contained' size='small' style={{marginRight:5}}>
    { week[new Date().getDay()] }
    </Button>
    <Button variant='contained' size='small'>
    {new Date().getDate()} / {(new Date().getMonth()) + 1} / {new Date().getFullYear()}
    </Button>
    </>)
}
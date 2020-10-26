import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';   
import Typography from '@material-ui/core/Typography';

const QuoteMachine = (props)=>(
<Card>
    <CardContent>
    {
        props.selectedQuote ? 
        (
            <Typography id='text'>
            {props.selectedQuote.quote} - <span id='author'>{props.selectedQuote.author}</span>
            </Typography>
        ) : null
    }
    </CardContent>
    <CardActions>
      <Button id ='new-quote' size="small" onClick={props.assignNewQuoteIndex}>Next Quote</Button>
    </CardActions>
</Card>
);
export default QuoteMachine;
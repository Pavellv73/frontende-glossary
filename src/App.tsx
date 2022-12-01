import { Accordion, AccordionDetails, AccordionSummary, Container, Typography, Backdrop, CircularProgress } from '@mui/material';

import { useEffect, useState } from 'react';
import { Footer, Header } from './components';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const arr = [
    {
      categoryId: 1,
      categoryTitle: 'HTML',
      questions: [
        {
          title: 'Test',
          answer: 'Test 1'
        },
        {
          title: 'Test',
          answer: 'Test 1'
        }
      ]
    },
    {
      categoryId: 2,
      categoryTitle: 'Styles',
      questions: [
        {
          title: 'Test',
          answer: 'Test 1'
        },
        {
          title: 'Test',
          answer: 'Test 1'
        }
      ]
    }
  ]

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);

  return (
    <div className="App">
      <Header />
      <Container>
        {isLoading ? (
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
            onClick={() => { }}
          >
            <CircularProgress color='inherit' />
          </Backdrop>
        ) : (
            <>
              {arr.map((item) => { 
                return (
                  <Accordion key={item.categoryId}>
                    <AccordionSummary>
                      <Typography variant='h5' component='h2'>{item.categoryTitle}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      { item.categoryTitle}
                    </AccordionDetails>
                  </Accordion>
                )
              })}</>   
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;

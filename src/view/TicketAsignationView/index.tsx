import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import SketchContent from '../../component/structur';
import TicketCreationForm from '../../component/tickets/ticketCreationForm';

function TicketAsignationContent() {
  return (
    <SketchContent>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <TicketCreationForm />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </SketchContent>
  );
}

export default function TicketAsignationView() {
  return <TicketAsignationContent />;
}
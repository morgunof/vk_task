import Container from '@mui/material/Container';
import image from '../accets/img/background.jpeg';

export const MainLayout = ({ children }) => {
    return (
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            {children}
        </Container>
    )
}
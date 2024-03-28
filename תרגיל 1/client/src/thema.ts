import { pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Segoe UI Symbol"', // שם הגופן המשמש לטקסט באפליקציה
    fontSize: 16, // גודל טקסט בברירת המחדל
  },
  palette: {
    primary: {
      main: '#2196f3', // צבע ראשי
    },
    secondary: {
      main: '#f50057', // צבע משני
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // הקעקוע של הכפתור
          textTransform: 'none', // לא לשנות את עיצוב הטקסט בכפתור
          fontStyle: 'italic', // סגנון טקסט בכפתור - נטוי
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 10, // הקעקוע של תיבת הטקסט
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // הקעקוע של תיבת הטבלה
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // הצללה של תיבת הטבלה
          padding: '16px', //   
          margin: '10vh auto', // מרווח מעליון ותחתון בתיבת הטבלה
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100vh', // גובה מקסימלי של תיבת הטבלה
          border: '1px solid #ccc', // קו גבול לתיבת הטבלה
        },
      },
    },
  
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5', // צבע רקע לתאי הטבלה
          fontSize: '1.2rem', // גודל טקסט בתאי הטבלה
          margin:'1px'
        },
        head: {
          fontWeight: 'bold', // עיצוב הטקסט בשורת הכותרת
          fontSize: '1.2rem', // גודל טקסט בשורת הכותרת
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // הצללה בשורת הכותרת
          border: '0.5px solid #ccc', // קו גבול בשורת הכותרת
          textAlign: 'center', // מירוץ הטקסט בשורת הכותרת
          backgroundColor:'rgb(44, 165, 230);',
          color:'white',
          height:'30%'
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          width: '50%', // רוחב של הטבלה
          height:'30%',
          // '& thead th': {
          //   textAlign: 'center', // מירוץ הטקסט בתאי הכותרת
          // },
          border: '1px solid #ccc', // קו גבול לטבלה
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          display: 'inline-block', // תצוגה של כפתורי עיגול
        //  marginLeft: '50%', // מרווח שמאלי של כפתורי עיגול
         // marginRight: '4%', // מרווח ימני של כפתורי עיגול
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          justifyContent: 'center', // מירוץ התוכן במרכז האופקי
          margin: '0 auto', // מרווח מסביב לתוכן במרכז האופקי
        },
      },
    },
    MuiCard:{
      styleOverrides:{
        root:{
          width:'30%',
          height:'300%',
          display: 'inline-block',
          textAlign: 'center',
        }
      }
    },
    MuiPaper:{
      styleOverrides:{
        root:{
          width:'100%',
          height:'2000%',
          display: 'inline-block',
          textAlign: 'center',
          backgroundColor:"rgb(158, 211, 240)",
          marginTop:'3px'
        }
      }
    }
  },
  
});

export default theme;
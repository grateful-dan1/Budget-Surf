import logo from './logo.svg';
import { PieChart } from 'react-minimal-pie-chart';
import './App.css';

function App() {
  return (
    <div className="App">
        <h2>Hello World</h2>
        <PieChart
        data={[
          //{ radius: 100 },
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' },
        ]}
/>
    </div>
    
  );
}

export default App;

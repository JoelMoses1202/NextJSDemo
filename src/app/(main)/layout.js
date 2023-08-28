import Navigation from '../../components/navigation';
import Card from '@/Containers/card';
import '../(main)/layout.scss';
export default function Layout({children})
{
    return (
    <div>
    <Navigation/>
    <h1>Hi,{children}</h1>
    <Card/>
    <Card/>
  </div>
  
  )
}
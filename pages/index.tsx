import CustomButton from '@/components/Button';
import Function from '@/components/Function';



export default function Home() {
  return (
    <div className="flex flex-col items-center pt-24">
      <h1>Home</h1>
      <CustomButton >Original Button</CustomButton>
      <CustomButton className='bg-red-700 w-[300px] '>Modi Button</CustomButton>
      <Function click={() => alert('You have cklicked')}/>
    </div>
  );
}

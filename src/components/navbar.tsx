import { ModeToggle } from './mode-toggle';

export const Navbar = () => {
  return (
    <div className='m-4 flex items-center font-bold'>
      <a href='/microeconomics.study'>microeconomics.study</a>
      <div className='ml-auto'>
        <ModeToggle />
      </div>
    </div>
  );
};

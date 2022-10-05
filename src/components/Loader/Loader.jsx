import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      color="red"
      wrapperStyle={{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '56px',
      }}
    />
  );
};

import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const counterValue = useSelector(getCounterValue);
  const { increment, decrement } = useCounterActions();
  const inc = () => {
    increment();
  };
  const dec = () => {
    decrement();
  };
  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button data-testid='increment-btn' onClick={inc} />
      <Button data-testid='decrement-btn' onClick={dec} />
    </div>
  );
};

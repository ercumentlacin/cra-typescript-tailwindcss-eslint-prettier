import { connect } from 'react-redux';
import ButtonGroub from './components/ButtonGroub';
import Container from './components/Container';
import usePrevious from './Hooks/usePrevious';
import { RootState, StateProps } from './types';

type Props = StateProps;

const App = (props: Props) => {
  const { plusMinus } = props;
  const previosCount = usePrevious(plusMinus);
  return (
    <Container>
      <h1>{plusMinus}</h1>

      <ButtonGroub />
      {previosCount !== undefined && (
        <div className="flex flex-col space-y-3 items-center pt-8">
          <h3>Previous Count</h3>
          <h1>{previosCount}</h1>
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  plusMinus: state.plusMinusReducer,
});

export default connect(mapStateToProps)(App);

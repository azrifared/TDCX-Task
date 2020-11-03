import React from 'react';
import styled from 'styled-components';
import { px2vw } from '../utils';
import TaskField from './TaskField';
import Buttons from './TaskButton';
import { FormProps } from './TaskField';
import Form from '../Fields/Form';
import { AsyncState } from '../../observables';
import CenteredSpinner from '../Spinner/CenteredSpinner';

type CreateTaskProps = FormProps & {
  state: AsyncState<any>;
  onClose(): void;
}

const CreateTask = ({ formContext, state, onClose }: CreateTaskProps) => {

  return (
    <>
      <Overlay />
      <Container>
        {state.loading
          ? <CenteredSpinner />
          : (
            <Form formContext={formContext}>
              <TaskField
                formContext={formContext}
                name='name'
                placeholder='Create task'
              />
              <Buttons onClose={onClose} />
            </Form>
          )
        }
      </Container>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  cursor: pointer;
`;

const Container = styled.div`
  min-height: 150px;
  left: 49%;
  top: 30%;
  position: absolute;
  border-radius: 15px;
  -webkit-transform: translate3d(-50%, -50%, 0);
  -moz-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  width: ${px2vw(325, 350)};
  padding: ${px2vw(100)};
  margin: ${px2vw(20)};
  background-color: white;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    padding: ${px2vw(50)};
    margin: ${px2vw(20)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(300)};
    padding: ${px2vw(20)};
    margin: ${px2vw(10)};
  }

`;

export default CreateTask;
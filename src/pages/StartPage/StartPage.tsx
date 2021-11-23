import styled from "styled-components";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialStart } from "../../core/store/thunks/asynkInitial";
import { RootState } from "../../core/store";
import { TopContent } from "./TopContent";

export const StartPage = () => {
  const dispatch = useDispatch();
  const { upcoming, isLoader } = useSelector((state: RootState) => state.initial);
  useEffect(() => {
    dispatch(initialStart(1));
  }, [dispatch]);

  const images: string[] = useMemo(
    () =>
      upcoming.results.map((e: any) => {
        return e.backdrop_path;
      }),
    [upcoming],
  );

  return (
    <>
      {!isLoader && (
        <Container>
          <TopContent images={images} />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

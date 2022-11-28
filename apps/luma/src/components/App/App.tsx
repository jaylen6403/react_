import { useEffect, useState } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { Login, LumaSecondaries } from '@luma-fe-workspace/luma/secondaries';

import {
  useAppSelector,
  selectAccessToken,
  LumaAppRedirect,
  AuthGuard,
  SessionTimeout,
  selectUsername,
  useGetWithUserNameUsingGetQuery,
  useGetMetadataByUsernameUsingGetQuery,
  selectAuth,
  selectJwt,
} from '@luma-fe-workspace/redux';
import { LumaNotFound } from '@luma-fe-workspace/design-system';
import { isLocal, URL_PATHS } from '@luma-fe-workspace/utility';
import { CreationHub } from '@luma-fe-workspace/luma/creationhub';
import { LumaDashboard } from '@luma-fe-workspace/luma/dashboard';
import { LumaEventConfirmation } from '@luma-fe-workspace/luma/confirmation';
import {
  LumaGlobalNav,
  TrainingModal,
} from '@luma-fe-workspace/luma/globalnav';
import {
  LumaLifecycleManager,
  LumaPerformanceReport,
} from '@luma-fe-workspace/luma/lifecyclemanager';
import { LumaContainer, Main, Section } from './App.styles';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pendo: any;
  }
}

export function App() {
  const { pathname } = useLocation();
  const paddingPaths: string[] = [];
  const basePath = pathname.split('/')[1];

  const [showTrainingModal, setShowTrainingModal] = useState(false);
  const accessToken = useAppSelector(selectAccessToken);
  const userName = useAppSelector(selectUsername);
  useGetWithUserNameUsingGetQuery(
    {
      userName,
    },
    { skip: !userName }
  );
  const authData = useAppSelector(selectAuth);
  const jwtData = useAppSelector(selectJwt);
  const { data: metaData, isLoading: loadingMetaData } =
    useGetMetadataByUsernameUsingGetQuery(
      {
        userName,
      },
      { skip: !userName }
    );

  const pendo = window.pendo;
  useEffect(() => {
    if (!loadingMetaData && jwtData && metaData) {
      const pendoVisitor = {
        id: userName,
        uuid: jwtData.uuid,
        first_name: authData.firstName,
        last_name: authData.lastName,
        full_name: authData.fullName,
        role: metaData.primaryRole,
        sub_role: metaData.subRoles,
        cdtraining_status: metaData.cdTrainingStatus,
        cdtraining_completedate: metaData.cdTrainingDate,
        cdtraining_score: metaData.cdTrainingScore,
        notestraining_status: metaData.notesTrainingStatus,
        notestraining_completedate: metaData.notesTrainingDate,

        notestraining_score: metaData.notesTrainingScore,
        annuitiestraining_status: metaData.annuityTrainingStatus,
        annuitiestraining_completedate: metaData.annuityTrainingDate,
        annuitiestraining_score: metaData.annuityTrainingScore,
      };

      const pendoAccount = {
        id: authData.company,
        type: metaData.tradeDeskType,
      };

      pendo.initialize({
        visitor: { ...pendoVisitor },
        account: { ...pendoAccount },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingMetaData]);

  return (
    <LumaContainer>
      <Main>
        {accessToken && (
          <LumaGlobalNav setShowTrainingModal={setShowTrainingModal} />
        )}

        <Section usePadding={paddingPaths.includes(basePath)}>
          <Routes>
            <Route
              index
              element={
                isLocal ? (
                  <Login />
                ) : (
                  <LumaAppRedirect isLoggedIn={accessToken} />
                )
              }
            />
            <Route
              element={
                <AuthGuard>
                  <>
                    <Outlet />
                    <SessionTimeout />
                  </>
                </AuthGuard>
              }
            >
              <Route path={URL_PATHS.DASHBOARD} element={<LumaDashboard />} />
              <Route
                path={URL_PATHS.CONFIRMATIONS}
                element={<LumaEventConfirmation />}
              />

              <Route
                path={`${URL_PATHS.SECONDARIES}/*`}
                element={<LumaSecondaries />}
              />
              <Route
                path={`${URL_PATHS.CREATIONHUB}/*`}
                element={<CreationHub />}
              />
              <Route
                path={`${URL_PATHS.LIFECYCLE}/*`}
                element={<LumaLifecycleManager />}
              />
              <Route
                path={`${URL_PATHS.LIFECYCLE_REPORT}/*`}
                element={<LumaPerformanceReport />}
              />
              <Route path="*" element={<LumaNotFound />} />
            </Route>
          </Routes>
        </Section>
      </Main>
      <TrainingModal
        isOpen={showTrainingModal}
        setShowTrainingModal={setShowTrainingModal}
      />
    </LumaContainer>
  );
}

export default App;

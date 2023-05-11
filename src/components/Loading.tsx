import { CircularProgress } from "@mui/material";

import styled from "styled-components";

const StyledLoading = styled(CircularProgress)`
  display: block !important;
  margin-top: 20px !important;
  color: var(--primary) !important;
`;

const Loading: React.FC = () => <StyledLoading />;

export default Loading;

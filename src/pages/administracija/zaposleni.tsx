import Layout from "@/components/administration/Layout";

import styled from "styled-components";

const StyledEmployee = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Employee: React.FC<{}> = () => {
  return (
    <Layout title={"Zaposleni"}>
      <p>Employee</p>
    </Layout>
  );
};

export default Employee;

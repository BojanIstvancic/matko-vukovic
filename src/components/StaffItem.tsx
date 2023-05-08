import { memo } from "react";

import Image from "next/image";

import { staffRoles } from "@/constants/helpers";
import { Employee } from "@/constants/types";
import Portrait from "/public/images/portrait.png";

import styled from "@emotion/styled";

const StyledStaffItem = styled.div`
  text-align: center;
`;
const StaffItemImage = styled.div`
  position: relative;
  margin-bottom: 10px;
`;
const StaffItemName = styled.p`
  font-weight: bold;
`;
const StaffItemRole = styled.p`
  margin-bottom: 10px;
`;

export interface StaffItemProps {
  item: Employee;
}

const StaffItem: React.FC<StaffItemProps> = ({ item }) => (
  <StyledStaffItem key={item._id}>
    <StaffItemImage>
      <Image
        src={item.image || Portrait}
        alt={item.firstName}
        width={640}
        height={639}
      />
    </StaffItemImage>
    <StaffItemName>{`${item.firstName} ${item.lastName}`}</StaffItemName>
    <StaffItemRole>{staffRoles[item.role]}</StaffItemRole>
  </StyledStaffItem>
);

export default memo(StaffItem);

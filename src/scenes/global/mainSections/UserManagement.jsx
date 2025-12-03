import React from "react";
import {
  Box,
  Container,
  Link,
} from "@mui/material";
import { SearchBar, BackButton, PageHeader, StyledTable, StyledTableRow, StyledTableCell } from "../../../components";
import { userData } from "../../../data/userData";

function UserManagement() {
  const columns = ['Member', 'Role', 'Level', 'Last Active', 'Action', ''];
  
  const renderUserRow = (user) => (
    <StyledTableRow key={user.id}>
      <StyledTableCell sx={{ fontWeight: "bold", color: "#1e293b" }}>
        {user.member}
      </StyledTableCell>
      <StyledTableCell sx={{ color: "#1e293b" }}>{user.role}</StyledTableCell>
      <StyledTableCell align="center">{user.level}</StyledTableCell>
      <StyledTableCell sx={{ textTransform: "capitalize", fontSize: "12px" }}>
        {user.lastActive}
      </StyledTableCell>
      <StyledTableCell align="center">
        <Link sx={{ color: "#1e293b", textDecoration: "underline" }}>
          view profile
        </Link>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Link sx={{ color: "#d12e33", textDecoration: "underline" }}>
          remove
        </Link>
      </StyledTableCell>
    </StyledTableRow>
  );

  return (
    <Box
      sx={{
        position: { lg: "absolute", md: "absolute", sm: "relative", xs: "relative" },
        left: { lg: "206.25px", md: "206.25px", sm: 0, xs: 0 },
        right: { lg: "20%", md: "20%", sm: 0, xs: 0 },
        top: 0,
        width: {
          lg: "calc(100% - 206.25px - 20%)",
          md: "calc(100% - 206.25px - 20%)",
          sm: "100%",
          xs: "100%",
        },
        overflowX: "hidden",
        bgcolor: "white",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <Container maxWidth="xl" sx={{ py: 2, px: 2 }}>
        <SearchBar 
          placeholder="Search by name ,role or team..." 
          sx={{ mb: 3 }} 
        />
        
        <PageHeader
          title="users managements"
          subtitle="manage all users and roles"
          action={<BackButton to="/" />}
        />

        <StyledTable
          columns={columns}
          data={userData}
          renderRow={(user) => renderUserRow(user)}
          headerColor="#f3f8ff"
        />
      </Container>
    </Box>
  );
}

export default UserManagement;


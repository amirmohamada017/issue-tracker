import { IssueStatus } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const statusMap: Record<
  IssueStatus,
  { lablel: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { lablel: "Open", color: "red" },
  IN_PROGRESS: { lablel: "In Progress", color: "violet" },
  CLOSED: { lablel: "Closed", color: "green" },
};

const IssueStatusBadge = ({ status }: { status: IssueStatus }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].lablel}</Badge>
  );
};

export default IssueStatusBadge;

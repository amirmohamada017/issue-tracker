import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div>
      <p>Issue: {issue.title}</p>
      <p>Status: {issue.status}</p>
      <p>Description: {issue.description}</p>
      <p>Created: {issue.createdAt.toDateString()}</p>
      <p>Updated: {issue.updatedAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetailPage;

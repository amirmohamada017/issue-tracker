"use client";

import { TextField, TextArea, Button } from "@radix-ui/themes";
import React from "react";

const newIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title"></TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit</Button>
    </div>
  );
};

export default newIssuePage;
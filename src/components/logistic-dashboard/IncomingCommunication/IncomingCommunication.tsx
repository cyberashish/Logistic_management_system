import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const IncomingCommunication = () => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h5 className="text-base font-medium text-dark leading-none">
         Incoming Communications
        </h5>
        <Icon icon="tabler:trash" width={24} height={24} />
      </div>
    </Card>
  );
};

export default IncomingCommunication;

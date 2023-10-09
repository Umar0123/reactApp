import React from "react";
import { Dialog, DialogType, DialogFooter } from "@fluentui/react/lib/Dialog";
import { PrimaryButton, DefaultButton } from "@fluentui/react/lib/Button";
import { useBoolean } from "@fluentui/react-hooks";

const dialogContentProps = {
  type: DialogType.normal,
  title: "Confirm Payment",
  closeButtonAriaLabel: "Close",
  subText: "Are you sure you want to proceed with your payment?",
};

export const Card: React.FunctionComponent = () => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);

  return (
    <React.Fragment>
      <DefaultButton
        secondaryText="Opens the Sample Dialog"
        onClick={toggleHideDialog}
        text="Open Dialog"
      />
      <Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        dialogContentProps={dialogContentProps}
      >
        <DialogFooter>
          <PrimaryButton onClick={toggleHideDialog} text="Confirm" />
          <DefaultButton onClick={toggleHideDialog} text="Reject" />
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
};

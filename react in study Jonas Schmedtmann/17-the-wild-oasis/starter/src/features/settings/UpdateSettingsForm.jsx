import useSettings from "./useSettings";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { Input } from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useUpdateSettings } from "./useUpdateSettings";

function UpdateSettingsForm() {
  const { settings, isLoading } = useSettings();
  const { mutateEditSettings, isEditing } = useUpdateSettings();

  if (isLoading) {
    return <Spinner />;
  }

  function handleUpdate(value, column) {
    if (!value) return;

    mutateEditSettings({
      [column]: value,
    });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={settings?.minBookingLength}
          disabled={isEditing}
          onBlur={(evt) => handleUpdate(evt.target.value, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={settings?.maxBookingLength}
          disabled={isEditing}
          onBlur={(evt) => handleUpdate(evt.target.value, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={settings?.maxGuestsPerson}
          disabled={isEditing}
          onBlur={(evt) => handleUpdate(evt.target.value, "maxGuestsPerson")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={settings?.breakfastPrice}
          disabled={isEditing}
          onBlur={(evt) => handleUpdate(evt.target.value, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;

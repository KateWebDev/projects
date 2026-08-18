import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useUpdateCabin } from "./useUpdateCabin";
import { useCreateCabin } from "./useCreateCabin";

function CreateCabinForm({ editCabin = {} }) {
  const { id: editCabinId, ...editValues } = editCabin;
  const isEditCabin = Boolean(editCabinId);
  const { mutateEditCabin, isEditing } = useUpdateCabin();
  const { mutateCreateCabin, isCreating } = useCreateCabin();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: isEditCabin ? editValues : {},
  });

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditCabin) mutateEditCabin({ newCabin: { ...data, image }, id: editCabinId });
    else
      mutateCreateCabin(
        { ...data, image },
        {
          onSuccess: (data) => reset(),
        },
      );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "this field is required to fill in",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "this field is required to fill in",
            min: {
              value: 1,
              message: "Capacity must be greater than 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "this field is required to fill in",
            min: {
              value: 1,
              message: "Price must be greater than 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isWorking}
          {...register("discount", {
            required: "this field is required to fill in",
            max: {
              value: 1000,
              message: "Discount must be less than 1000",
            },
            validate: (value) => value <= getValues().regularPrice || "Discount is more than the price list",
          })}
        />
      </FormRow>

      <FormRow label="Description for website " error={errors?.description?.message}>
        <Textarea
          id="description"
          disabled={isWorking}
          {...register("description", {
            required: "this field is required to fill in",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          disabled={isWorking}
          {...register("image", {
            required: isEditCabin ? false : "this field is required to fill in",
          })}
        />
      </FormRow>

      <FormRow>
        <Button type="reset">Reset</Button>
        <Button type="submit" disabled={isWorking}>
          {isEditCabin ? "Edit cabin" : "Add new cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;

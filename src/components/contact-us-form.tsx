"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Send, X } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

const contactUsFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(20, { message: "Name cannot exceed 20 characters." })
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "Name must only include alphanumeric characters.",
    }),
  email: z.string().trim().email(),
  phone: z.string(),
  donate: z.string(),
  code: z.string(),
  model: z.string(),
  device: z.string(),
  brand: z.string(),
  message: z
    .string()
    .trim()
    .min(5, { message: "Message must be at least 5 characters." })
    .max(800, { message: "Message cannot exceed 800 characters." }),
});

type TContactUsForm = z.infer<typeof contactUsFormSchema>;

export function ContactUsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit, reset } = useForm<TContactUsForm>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      donate: "",
      code: "",
      model: "",
      device: "",
      brand: "",
      message: "",
    },
  });

  const onSubmit = async ({
    name,
    email,
    phone,
    donate,
    code,
    model,
    device,
    brand,
    message,
  }: TContactUsForm) => {
    try {
      setIsSubmitting(true);

      const newMessage = {
        name,
        email,
        phone,
        donate,
        code,
        model,
        device,
        brand,
        message,
      };
      console.log(newMessage);

      // await emailjs.send(
      //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      //   newMessage,
      //   process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string,
      // );

      reset();
      toast.success("Sent.");
    } catch (error) {
      console.log(error);
      toast.success("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              size="lg"
              label="Name"
              placeholder="Enter your name"
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
              classNames={{
                label: "text-base font-semibold",
                inputWrapper:
                  "bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border border-foreground/10 data-[hover=true]:bg-content1/75 group-data-[focus=true]:bg-content1/75",
              }}
            />
          )}
        />
        <div className="flex flex-col gap-2 lg:flex-row">
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                size="lg"
                label="Email"
                placeholder="Enter your email"
                errorMessage={fieldState.error?.message || ""}
                isInvalid={fieldState.invalid}
                {...field}
                classNames={{
                  label: "text-base font-semibold",
                  inputWrapper:
                    "bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border border-foreground/10 data-[hover=true]:bg-content1/75 group-data-[focus=true]:bg-content1/75",
                }}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                size="lg"
                label="phone"
                placeholder="Enter your phone no"
                errorMessage={fieldState.error?.message || ""}
                isInvalid={fieldState.invalid}
                {...field}
                classNames={{
                  label: "text-base font-semibold",
                  inputWrapper:
                    "bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border border-foreground/10 data-[hover=true]:bg-content1/75 group-data-[focus=true]:bg-content1/75",
                }}
              />
            )}
          />
        </div>
        <Controller
          name="donate"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              size="lg"
              label="donate"
              placeholder="Enter your donate amount"
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
              classNames={{
                label: "text-base font-semibold",
                inputWrapper:
                  "bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border border-foreground/10 data-[hover=true]:bg-content1/75 group-data-[focus=true]:bg-content1/75",
              }}
            />
          )}
        />
        <div className="flex flex-col gap-2 lg:flex-row">
          <Controller
            name="code"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                size="lg"
                label="code"
                placeholder="Enter your code no"
                errorMessage={fieldState.error?.message || ""}
                isInvalid={fieldState.invalid}
                {...field}
                classNames={{
                  label: "text-base font-semibold",
                  inputWrapper:
                    "bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border border-foreground/10 data-[hover=true]:bg-content1/75 group-data-[focus=true]:bg-content1/75",
                }}
              />
            )}
          />
          <Controller
            name="model"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                size="lg"
                label="model"
                placeholder="Enter your model "
                errorMessage={fieldState.error?.message || ""}
                isInvalid={fieldState.invalid}
                {...field}
                classNames={{
                  label: "text-base font-semibold",
                  inputWrapper:
                    "bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border border-foreground/10 data-[hover=true]:bg-content1/75 group-data-[focus=true]:bg-content1/75",
                }}
              />
            )}
          />
        </div>
        <Controller
          name="device"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              size="lg"
              label="device"
              placeholder="Enter your device "
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
              classNames={{
                label: "text-base font-semibold",
                inputWrapper:
                  "bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border border-foreground/10 data-[hover=true]:bg-content1/75 group-data-[focus=true]:bg-content1/75",
              }}
            />
          )}
        />
        <Controller
          name="brand"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              size="lg"
              label="brand"
              placeholder="Enter your brand"
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
              classNames={{
                label: "text-base font-semibold",
                inputWrapper:
                  "bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border border-foreground/10 data-[hover=true]:bg-content1/75 group-data-[focus=true]:bg-content1/75",
              }}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field, fieldState }) => (
            <Textarea
              size="lg"
              minRows={8}
              label="Message"
              placeholder="Enter your message"
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
              classNames={{
                label: "text-base font-semibold",
                inputWrapper:
                  "bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border border-foreground/10 data-[hover=true]:bg-content1/75 group-data-[focus=true]:bg-content1/75",
              }}
            />
          )}
        />
        <div className="flex items-center justify-end gap-x-2 pt-2">
          <Button
            type="button"
            variant="solid"
            startContent={<X size={16} />}
            onClick={() => {
              reset();
            }}
            size="lg"
            className="border border-foreground/10 bg-content1/65 backdrop-blur-xl backdrop-saturate-200 data-[hover=true]:bg-content1/75 group-data-[focus=true]:bg-content1/75"
          >
            <span>Clear</span>
          </Button>
          <Button
            startContent={<Send size={16} />}
            type="submit"
            color="primary"
            isLoading={isSubmitting}
            size="lg"
          >
            <span>Submit</span>
          </Button>
        </div>
      </form>
    </section>
  );
}

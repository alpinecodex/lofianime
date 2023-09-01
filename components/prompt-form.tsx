"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import useSWR from "swr";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import ReplicateImage from "./replicate-image";

const formSchema = z.object({
  prompt: z.string().nonempty({
    message: "Required.",
  }),
});

export default function PromptForm() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, mutate } = useSWR("/api/remaining", fetcher);

  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    const response = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify(values),
    });
    if (response.status === 200) {
      const data = await response.json();
      mutate();
      setImage(data?.[0]);
      setLoading(false);
      //   toast({
      //     title: "Successfully Created",
      //     description: "We will send you an email once your report runs!",
      //   });
    } else {
      //   toast({
      //     title: "An Error Occurred",
      //     description: "Please try again later or reach out to support.",
      //   });
    }
  };

  return (
    <>
      {data && (
        <div className="mt-4">
          <p className="text-slate-700 text-sm italic">
            You have{" "}
            <span className="font-semibold">
              {data.remainingGenerations} generations
            </span>{" "}
            left today. Your generation
            {Number(data.remainingGenerations) > 1 ? "s" : ""} will renew in{" "}
            <span className="font-semibold">
              {data.hours} hours and {data.minutes} minutes.
            </span>
          </p>
        </div>
      )}
      <Form {...form}>
        {!image && (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full mt-3 max-w-[700px]"
          >
            <div className="relative">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="sr-only">Prompt</FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none"
                        placeholder="Beachfront property in Okinawa, Japan..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {loading ? (
                <Button
                  disabled={loading}
                  className="absolute bottom-2 right-2"
                >
                  <svg
                    className="animate-spin h-5 w-5 mr-3 ..."
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 1.37.259 2.678.719 3.858l1.817-1.1z"
                    ></path>
                  </svg>
                  Processing...
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={loading}
                  size="icon"
                  className="absolute bottom-2 right-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-send-horizontal h-4 w-4"
                  >
                    <path d="m3 3 3 9-3 9 19-9Z" />
                    <path d="M6 12h16" />
                  </svg>
                  <span className="sr-only">Submit</span>
                </Button>
              )}
            </div>
          </form>
        )}
      </Form>
      {image && <ReplicateImage url={image} setImage={setImage} />}
    </>
  );
}

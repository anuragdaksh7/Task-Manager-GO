"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import createTaskSchema from "@/utils/validation/createEvent";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import axios from "axios";

export default function Page() {
  const fetchTasks = async () => {
    const response = await axios.post("/api/v1/tasks/findTask", {
      email: "anurag@g.g",
    });
    const data = await response.data;
    console.log(data);
  };

  const [priority, setPriority] = useState("Low");
  const form = useForm({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      title: "",
      dueDate: "",
      description: "",
      priority: priority,
      category: "",
      dependencies: "",
      labels: "",
    },
  });

  async function onSubmit(values) {
    values.priority = priority;
    const response = axios.post("/api/v1/tasks/createTask", values);
    const data = await response?.data;
    console.log(values, data);
  }

  useEffect(() => {
    fetchTasks();
  },[]);
  return (
    <div className="flex justify-center mt-32 text-black">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-4 border-2 px-6 py-4 rounded-md bg-white shadow-white shadow-sm"
        >
          <h1 className="text-xl  font-semibold">Create New Task</h1>
          <div className="flex gap-4">
            <div className="w-72 space-y-2  ">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder={`Title`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder={`Description`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Due Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "  text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/*<FormField*/}
                {/*    control={form.control}*/}
                {/*    name="dueDate"*/}
                {/*    render={({field}) => (*/}
                {/*        <FormItem>*/}
                {/*            <FormLabel>DueDate</FormLabel>*/}
                {/*            <FormControl>*/}
                {/*                <Input placeholder={`dueDate`} {...field} />*/}
                {/*            </FormControl>*/}
                {/*            <FormMessage/>*/}
                {/*        </FormItem>*/}
                {/*    )}*/}
                {/*/>*/}
                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priority</FormLabel>
                      <FormControl>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <Input
                              {...field}
                              value={priority}
                              className="cursor-pointer"
                              readOnly
                              placeholder={`Set Priority`}
                            />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuRadioGroup
                              value={priority}
                              className="flex flex-col gap-1"
                              onValueChange={setPriority}
                            >
                              <DropdownMenuRadioItem
                                className="text-red-500"
                                value="High"
                              >
                                High
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem
                                className="text-yellow-300"
                                value="Medium"
                              >
                                Medium
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem
                                className="text-green-400"
                                value="Low"
                              >
                                Low
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        {/*<Input placeholder={`Priority`} {...field} />*/}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="w-72 space-y-2  ">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input placeholder={`Category`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dependencies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dependencies</FormLabel>
                    <FormControl>
                      <Input placeholder={`Dependencies`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="labels"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Labels</FormLabel>
                    <FormControl>
                      <Input placeholder={`Labels`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

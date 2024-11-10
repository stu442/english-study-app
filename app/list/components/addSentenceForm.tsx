'use client'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from '@/lib/supabase';

const formSchema = z.object({
  sentence: z.string().min(1, {
    message: "Sentence must be at least 1 character.",
  }),
  translation: z.string().min(1, {
    message: "Translation must be at least 1 character.",
  }),
  notes: z.string().optional(),
});

export function AddSentenceForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sentence: "",
      translation: "",
      notes: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { error } = await supabase
        .from('sentences')
        .insert({
          content: values.sentence,
          translation: values.translation,
          notes: values.notes,
          status: 0,
          review_level: 0,
          next_review_at: new Date().toISOString(),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });
      if (error) throw error;
      form.reset();
    } catch (error) {
      console.error('Error inserting sentence:', error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="sentence"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sentence</FormLabel>
              <FormControl>
                <Input autoComplete='off' placeholder="Enter the sentence" {...field} />
              </FormControl>
              <FormDescription>
                Enter the sentence in the original language.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="translation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Translation</FormLabel>
              <FormControl>
                <Input autoComplete='off' placeholder="Enter the translation" {...field} />
              </FormControl>
              <FormDescription>
                Enter the translation of the sentence.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Add any additional notes (optional)"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can add any additional notes or context here.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add Sentence</Button>
      </form>
    </Form>
  );
}

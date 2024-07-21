import { ClientSchema, Schema as S } from "@triplit/client";

/**
 * Define your schema here. After:
 * - Pass your schema to your Triplit client
 * - Push your schema to your Triplit server with 'triplit schema push'
 *
 * For more information about schemas, see the docs: https://www.triplit.dev/docs/schemas
 */
export const schema = {
  form: {
    schema: S.Schema({
      id: S.Id(),
      fields: S.RelationMany('field', {
        where: [['form_id', '=', '$id']],
      }),
    })
  },  
  field: {
    schema: S.Schema({
      id: S.Id(),
      title: S.String(),
      form_id: S.String(),
    }),
  },
} satisfies ClientSchema;

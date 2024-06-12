import { createEnv } from '@t3-oss/env-core'
import { vercel } from '@t3-oss/env-core/presets'
import { z } from 'zod'

export const env = createEnv({
	extends: [vercel()],
	shared: {
		NODE_ENV: z.enum(['development', 'production', 'test']).optional(),
	},
	server: {},
	client: {},
	clientPrefix: 'PUBLIC_',
	runtimeEnv: import.meta.env,
	skipValidation: !!import.meta.env.SKIP_ENV_VALIDATION,
	emptyStringAsUndefined: true,
})

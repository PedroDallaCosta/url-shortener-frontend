import { z } from 'zod';
import { toast } from "sonner"
import { useState } from "react"
import { createShortUrl } from '@/service/api';

const urlSchema = z.object({
    url: z.string().url({ message: "Invalid URL" }),
    password: z.string().optional({ message: "Invlid password " }),
    expireTime: z.preprocess((val) => {
        if (typeof val === "string" || val instanceof Date) {
            const date = new Date(val);
            // Check if date is valid
            if (!isNaN(date.getTime())) {
                return date;
            }
            // Invalid date string or object -> return undefined to fail validation
            return undefined;
        }
        return val;
    }, z.date().optional()),
})

export const Form = () => {
    const [url, setUrl] = useState("");
    const [password, setPassword] = useState("");
    const [expireTime, setExpireTime] = useState("");
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const schema = {
            url: url,
            password: password,
            expireTime: expireTime
        }

        const { success, data = {}, error = {} } = urlSchema.safeParse(schema)
        if (!success) {
            error.errors.forEach(({ message }) => {
                toast.error(message)
            })

            setLoading(false)
            return
        }

        setLoading(true)

        const { url: URL, password: PASSWORD, expireTime: EXPIRETIME } = data

        try {
            const result = await createShortUrl(data);
            if (!result.success) {
                const msg = result.error?.message ?? "Failed to create short URL";
                throw new Error(msg);
            }

            const { shortUrl = "/" } = result;
            // setShortenedUrl(result.shortUrl);
            toast.message('Link shortened successfully!', {
                description: shortUrl,
            })

            window.location.href = shortUrl
        } catch (apiError) {
            const errorMessage = apiError instanceof Error ? apiError.message : "Unknown error";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    return {
        url,
        setUrl,
        password,
        setPassword,
        expireTime,
        setExpireTime,
        loading,
        setLoading,
        handleSubmit,
    }
}

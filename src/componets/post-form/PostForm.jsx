import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (!post) {
            const currentDateTime = new Date();
            const date = currentDateTime.toLocaleDateString();
            const time = currentDateTime.toLocaleTimeString();

            setValue("date", date);
            setValue("time", time);
        }
    }, [setValue, post]);

    const submit = async (data) => {
        let file;
        if (data.image[0]) {
            file = await appwriteService.uploadFile(data.image[0]);
        }

        if (post) {
            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            if (file) {
                data.featuredImage = file.$id;
            }
            const dbPost = await appwriteService.createPost({
                ...data,
                userId: userData.$id,
                like: []
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }
        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap bg-gradient-to-br from-[#02AABD] to-[#00CDAC] p-6 rounded-lg">
            <div className="w-full md:w-2/3 px-2">
                <Input
                    label="Title:"
                    placeholder="Title"
                    className="mb-4 text-black"
                    labelClassName="text-gray-400"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug:"
                    placeholder="Slug"
                    className="mb-4 text-black"
                    labelClassName="text-gray-400"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <Input
                    label="Author Name:"
                    placeholder="Author Name"
                    className="mb-4 text-black"
                    labelClassName="text-gray-400"
                    {...register("author", { required: true })}
                />
                <Input
                    label="Publish Date"
                    className="mb-4 text-black"
                    labelClassName="text-black"
                    {...register("date", { required: true })}
                    readOnly
                />
                <Input
                    label="Time in IST"
                    className="mb-4 text-black"
                    labelClassName="text-black"
                    {...register("time", { required: true })}
                    readOnly
                />
                <RTE label="Content:" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-full md:w-1/3 px-2 mt-4 md:mt-0">
                <Input
                    label="Featured Image:"
                    type="file"
                    className="mb-4 text-black"
                    labelClassName="text-gray-400"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["Active", "Inactive"]}
                    label="Status"
                    defaultValue={post ? post.status : "active"}
                    placeholder="Status"
                    className="mb-4 text-black rounded-lg py-2 px-3 outline-none focus:ring-2 focus:ring-indigo-500"
                    labelClassName="text-gray-400"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

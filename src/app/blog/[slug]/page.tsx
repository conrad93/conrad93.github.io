import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

enum ContentType {
    Paragraph = "paragraph",
    Image = "image",
    Code = "code",
    List = "list",
    Heading = "heading"
}

interface PostContentBlock {
    type: ContentType;
    text?: string;
    code?: string;
    language?: string;
    items?: string[];
    src?: string;
    alt?: string;
}

interface Post {
    title: string;
    image: string;
    content: PostContentBlock[];
}

export default function Blog() {
    
    const post: Post = {
        "title": "How to Use CSS Flexbox for Responsive Layouts",
        "image": "https://images.pexels.com/photos/14553730/pexels-photo-14553730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "content": [
            {
                "type": ContentType.Paragraph,
                "text": "Flexbox (Flexible Box Layout) is a modern CSS layout model that simplifies the creation of complex and responsive web layouts. Unlike traditional layout methods (like float or inline-block), Flexbox is designed to align, distribute, and order elements dynamically, making it ideal for building adaptable, responsive designs."
            },
            {
                "type": ContentType.Paragraph,
                "text": "In this guide, we'll explore the essential properties of Flexbox and demonstrate how to use it to create a responsive layout. By the end, you’ll have a solid foundation for building flexible and adaptive web layouts with ease."
            },
            {
                "type": ContentType.Heading,
                "text": "Getting Started with Flexbox"
            },
            {
                "type": ContentType.Paragraph,
                "text": "Flexbox is activated on a container element by setting display: flex. Once an element is defined as a flex container, all its direct children (flex items) can be positioned and sized according to the rules of Flexbox."
            },
            {
                "type": ContentType.Code,
                "language": "css",
                "code": "/* CSS to define a flex container */\n.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}"
            },
            {
                "type": ContentType.Paragraph,
                "text": "In this code:\n- display: flex; makes the container a flex container.\n- flex-direction: row; arranges the flex items in a row (horizontally).\n- justify-content: center; centers the items horizontally within the container.\n- align-items: center; centers the items vertically within the container."
            },
            {
                "type": ContentType.Paragraph,
                "text": "You can change flex-direction to column to stack the items vertically, making Flexbox flexible for both row and column layouts."
            },
            {
                "type": ContentType.Heading,
                "text": "Essential Flexbox Properties"
            },
            {
                "type": ContentType.List,
                "items": [
                    "flex-grow: Determines how much a flex item should grow relative to other items.",
                    "flex-shrink: Allows an item to shrink if there isn’t enough space.",
                    "flex-basis: Sets the initial size of a flex item before it grows or shrinks."
                ]
            },
            {
                "type": ContentType.Paragraph,
                "text": "Together, these properties make Flexbox powerful for creating responsive layouts. For example, you can use flex-grow to make certain elements expand on larger screens and contract on smaller screens."
            },
            {
                "type": ContentType.Heading,
                "text": "Creating a Responsive Layout with Flexbox"
            },
            {
                "type": ContentType.Paragraph,
                "text": "Let’s put these properties to use in a practical example. We'll create a responsive layout with a sidebar and main content area:"
            },
            {
                "type": ContentType.Code,
                "language": "css",
                "code": "/* CSS for a responsive layout */\n.container {\n  display: flex;\n}\n\n.sidebar {\n  flex: 1;\n  background-color: #f0f0f0;\n}\n\n.main {\n  flex: 3;\n  background-color: #ffffff;\n}"
            },
            {
                "type": ContentType.Paragraph,
                "text": "In this layout:\n- The sidebar takes up 1 part of the available space.\n- The main content area takes up 3 parts, making it three times as wide as the sidebar.\n- Flexbox automatically adjusts the sizes of both sections when the screen size changes, keeping the layout responsive."
            },
            {
                "type": ContentType.Heading,
                "text": "Aligning and Spacing with Flexbox"
            },
            {
                "type": ContentType.Paragraph,
                "text": "Flexbox allows you to control the alignment and spacing of items with properties like justify-content, align-items, and align-content."
            },
            {
                "type": ContentType.List,
                "items": [
                    "justify-content: Aligns items along the main axis (horizontal if flex-direction is row). Options include flex-start, flex-end, center, space-between, and space-around.",
                    "align-items: Aligns items along the cross axis (vertical if flex-direction is row). Options include stretch, flex-start, flex-end, and center.",
                    "align-content: Similar to align-items, but only applies to multi-line containers. It distributes space between rows if there’s extra space in the cross axis."
                ]
            },
            {
                "type": ContentType.Code,
                "language": "css",
                "code": "/* Example of alignment and spacing */\n.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}"
            },
            {
                "type": ContentType.Paragraph,
                "text": "In this example:\n- justify-content: space-between; evenly spaces items along the main axis.\n- align-items: center; centers items along the cross axis, providing a balanced and visually appealing layout."
            },
            {
                "type": ContentType.Heading,
                "text": "Flexbox Tips for Responsive Design"
            },
            {
                "type": ContentType.List,
                "items": [
                    "Use Media Queries with Flexbox: To further enhance responsiveness, use media queries to adjust flex-direction and other properties based on screen size. For example, you might switch from a row layout to a column layout on smaller screens.",
                    "Combine with min-width and max-width: Setting min-width or max-width on flex items ensures they don’t shrink or grow beyond a certain point, creating a more consistent layout across screen sizes.",
                    "Experiment with Nested Flex Containers: Flex containers can be nested within each other, which allows for complex layouts that adapt easily to different screen sizes."
                ]
            },
            {
                "type": ContentType.Heading,
                "text": "Complete Example: Responsive Layout with Sidebar and Content"
            },
            {
                "type": ContentType.Code,
                "language": "css",
                "code": "/* CSS for a responsive layout with flex-wrap */\n.container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.sidebar {\n  flex: 1;\n  min-width: 200px;\n  background-color: #f0f0f0;\n}\n\n.main {\n  flex: 3;\n  min-width: 400px;\n  background-color: #ffffff;\n}"
            },
            {
                "type": ContentType.Paragraph,
                "text": "With this code:\n- flex-wrap: wrap; ensures the items wrap to the next line if there isn’t enough space.\n- min-width properties on .sidebar and .main provide a minimum width to maintain readability on smaller screens."
            },
            {
                "type": ContentType.Heading,
                "text": "Conclusion"
            },
            {
                "type": ContentType.Paragraph,
                "text": "CSS Flexbox is a versatile and powerful tool for building responsive layouts. With properties like flex-grow, flex-shrink, and alignment options, you can create layouts that adapt beautifully to different screen sizes. Start experimenting with Flexbox in your projects, and you’ll find it simplifies your layout process significantly. Happy coding!"
            }
        ]
    };    

    return (
        <>
            <Navbar />
            <main className="grid grid-cols-4">
                <div className="col-span-3 h-full">
                    <section className="bg-white text-dark border-2 border-black flex items-center justify-center">
                        <div className="px-4 py-8 md:py-16 lg:py-24 text-center md:text-left">
                            
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

                            {post.image && (
                                <Image src={post.image} alt="Blog post main image" width={600} height={300} className="w-full mb-6" />
                            )}

                            <div className="space-y-6">
                                {post.content.map((block, index) => {
                                    switch (block.type) {
                                        
                                        case "paragraph":
                                            return <p key={index} className="text-lg md:text-xl text-gray-700 mx-auto md:mx-0 mb-4">{block.text}</p>;

                                        case "image":
                                            return "src" in block ? <Image key={index} src={block.src as string} alt={(block.alt as string) || "Content image"} width={600} height={300} className="w-full mb-4" /> : null;

                                        case "code":
                                            return (
                                                <pre key={index} className="bg-gray-100 p-4 mb-4 overflow-x-auto">
                                                    <code className="text-gray-800 text-sm">{block.code}</code>
                                                </pre>
                                            );

                                        case "list":
                                            return (
                                                <ul key={index} className="list-disc list-inside text-gray-700 ml-5 space-y-2">
                                                    {block.items && block.items.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            );

                                        case "heading":
                                            return <h2 key={index} className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">{block.text}</h2>;

                                        default:
                                            return null;
                                    }
                                })}
                            </div>

                        </div>
                    </section>
                </div>
                <div className="col-span-1 h-full">
                </div>
            </main>
            <Footer />
        </>
    );
};
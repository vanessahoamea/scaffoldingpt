export function renderLink(node: any): { type: string, path: string, target?: string }
{
    // for external links
    if(node.data.link_type === "Web")
    {
        return { type: "external", path: node.data.url, target: node.data.target };
    }
    // for internal links
    else
    {
        switch(node.data.type)
        {
            case "about_page":
                return { type: "internal", path: "/about" };
            case "services_page":
                return { type: "internal", path: "/services" };
            case "hiring_page":
                return { type: "internal", path: "/hiring" };
            case "contact_page":
                return { type: "internal", path: "/contact" };
            case "terms_and_conditions_page":
                return { type: "internal", path: "/terms-and-conditions" };
            case "privacy_policy_page":
                return { type: "internal", path: "/privacy-policy" };
            case "home_page":
            default:
                return { type: "internal", path: "/" };
        }
    }
}
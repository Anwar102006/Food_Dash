import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 p-4 bg-muted/30 rounded-xl">
      <Button
        variant={selectedCategory === "All" ? "hero" : "outline"}
        size="sm"
        onClick={() => onCategoryChange("All")}
        className="transition-all duration-200"
      >
        All
        <Badge variant="secondary" className="ml-2">
          {categories.length}
        </Badge>
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "hero" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className="transition-all duration-200"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};